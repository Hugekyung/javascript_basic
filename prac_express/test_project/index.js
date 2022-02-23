// server 만들 때 기본 코드 예시
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require('./models/user');
const { PythonShell } = require("python-shell");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const Strategy = require("passport-local");

// mongoDB 연결 + data 추가(이미 존재하는 경우 예외처리)
mongoose.connect("mongodb+srv://<userId>:<password>@cluster0.nfefn.mongodb.net/<collection_name>")
        .then(async () => {
            console.log("success for connection DB")
            try {
                const user = new User({
                    username: "elice",
                    password: "1234"
                })
                await user.save();

                const user2 = new User({
                    username: "elice2",
                    password: "12345"
                })
                await user2.save();
            } catch (e) {
                console.log("data already exsit")
        }
        })
        .catch((e) => {
            console.log("fail to connect DB", e)
        })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.post("/run_code", (req, res) => {
//     const { code } = req.body;
//     if (code === undefined) {
//         res.send({
//             status: "fail",
//             result: "no result",
//         })
//     }
//     PythonShell.runString(`print("python world!")`, null, (err, result) => {
//         console.log(result);
//     })
//     res.send({
//         status: "succ",
//         lang: "python",
//         result: result,
//     })
// })

// app.post("/login", async (req, res) => {
//     const { username, password } = req.body;

//     const userData = await User.findOne({
//         username: username,
//     })
//     if (userData === null) {
//         res.send("no userData!")
//     }
//     if (userData.password === password) {
//         res.send("login succ!")
//     } else {
//         res.send("incorrect password!")
//     }
//     console.log(username);
//     res.send("Hello")
// })

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname + '/index.html'))
// })

// app.get("/asd/:value", (req, res) => {
//     res.send("Hello World" + req.params.value);
// })

// app.get("/search", (req, res) => {
//     const {name} = req.query;
//     res.send("전달 받은 값: " + name);
// })

// app.post("/search", (req, res) => {
//     res.send({
//         status: "succ",
//         vlaue: req.body.data,
//     })
// })

// 인증 & 인가 구현
app.use(
    session({
        secret: "secret",
        resave: true,
        saveUninitialized: true,
    })
)
app.use(passport.initialize());
app.use(passport.session());

passport.use(new Strategy(async (username, password, done) => {
    console.log("전달받은 값", username, password);
    const userData = await User.findOne({username})
    if (userData === null) {
        done(null, false) // 정보가 없는 경우
    } else if (userData.password === password) {
        done(null, userData) // 성공 => serializeUser로 이동
    } else {
        done(null, false) // 비밀번호 틀림
    }
}));

passport.serializeUser((user, done) => {
    console.log("(최소 인증시)인증된 유저: ", user);
    done(null, user); // 브라우저에게 쿠키 전달, 내부적으로 세션 저장
})

// 한번 로그인을 하고 serializeUser 이후에는 로그인이 된 상태
// 어떤 api에 접근하더라도 계속 deserializeUser가 실행
passport.deserializeUser((user, done) => {
    console.log("이미 인증된 유저: ", user);
    done(null, user); // req.user 갱신
})

app.post("/login", passport.authenticate("local", {
    successRedirect: "/", // 성공했을 때, 리다이렉트 경로 설정
    failureRedirect: "/login"
}))

app.get("/login", (req, res) => {
    res.send(`
        <form action="/login" method="POST">
            <input type="text" name="username">
            <input type="password" name="password">
            <input type="submit" value="login">
        </form>
    `)
})

// db 대신 간단하게 list로 db 구현
const post = [];
app.post("/post", (req, res) => {
    const { body, title } = req.body;
    const { username } = req.user;

    post.push({
        body: body,
        title: title,
        author: username,
    })
    res.redirect("/")
})

app.get("/", (req, res) => {
    console.log(req.user) // 로그인 전에는 undifined
    if (req.user === undefined) {
        res.send(`
            <h1>hi guest!</h1>
            <a href="/login">Login하기</a>
        `)
    } else {
        res.send(`
        <h1>${req.user.username} 님 안녕하세요!</h1>
        <a href="/logout">logout</a>

        <form action="/post" method="POST">
            <input type="text" name="title" placeholder="title">
            <textarea name="body" placeholder="body.."></textarea>
            <input type="submit" />
        </form>

        ${post.map((p) => `
            <div>
                <p>작성자: ${p.author}</p>
                <p>제목: ${p.title}</p>
                <p>내용: ${p.body}</p>
            </div>
            <hr>
        `).join("")}
        `)
    }
})

app.get("/logout", (req, res) => {
    req.logout()
    console.log(req.session)
    req.redirect("/")
})

app.listen(3030, () => {
    console.log("server Started")
})