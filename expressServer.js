const request = require('request');
const express = require('express');
const app = express();

// view 파일이 있는 디렉토리 저장
app.set('views', __dirname + '/views');

// 여러가지 뷰 엔진 중 ejs를 사용
app.set('view engine', 'ejs');

// JSON 형태의 데이터 전송 허용
app.use(express.json());

// urlencoded 형태의 데이터 전송 허용
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.send("Hello World!");
});

// 하위 주소 생성
app.get('/user', function(req, res) {
    res.send('Good')
});

app.get('/hello', function(req, res) {
    res.render('test');
});

app.get('/ejsTest', function(req, res) {
    res.render('index');
});

app.get('/signup', function(req, res) {
    res.render('signup');
});

app.get('/authResult', function(req, res) {
    var authCode = req.query.code;
    console.log(authCode);
    var option = {
        method : "POST",
        url : "https://testapi.openbanking.or.kr/oauth/2.0/token",
        headers : {
            "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
        },
        form : {
            code : authCode,
            client_id : "M0VfMyXbotz1CuYrtxHX2b1t91zN7ndEuFrmoEA1",
            client_secret : "YOtc2pq7UaLTalRyUdBT9LsTHnHG4XCTnsGDZY1p",
            redirect_uri : "http://localhost:3000/authResult",
            grant_type : "authorization_code"
        }
    };

    request(option, function(err, response, body) {
        console.log(body);
        res.json(body);
    })
});

app.post('/getData', function(req, res) {
    console.log(req.body);
    var getUserId = req.body.sendUserId;
    var getUserPassword = req.body.sendUserPassword;
    console.log(getUserId, getUserPassword);
    res.json(1);
});

app.listen(3000);