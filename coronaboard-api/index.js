const express = require('express');
const bodyParser = require('body-parser');
const app = express(); // 익스프레스 인스턴스 생성

    app.use(bodyParser.json()); // application/json 인 HTTP 요청의 바디를 파싱(분석 변환) 할 수 있도록 설정

    app.get('/', (req, res) => {
        res.json({ message: 'Hello CoronaBoard!'});
    });

    const port = process.env.PORT || 8080; // << 포트 기본값 설정
    app.listen(port, () =>{
        console.log(`Server is running on port ${port}`);
    });

