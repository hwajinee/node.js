const express = require('express')
const app = express()
//위 두줄은 express라이브러리 사용을 위한 세팅

app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중')
}) // 서버 띄우는(port를 오픈하는) 코드

app.get('/', (req, resp) => {
    resp.send('반갑다')
})

// 함수는 아래와 같이 '=>' 또는 'function' 두가지 문법으로 작성 가능.
// 콜백함수 : 다른 함수의 파라미터로 들어가는 함수이다.
// get메서드를 먼저 실행한 후, 콜백 함수를 실행하게 되는데, 이처럼 차례대로 실행하고자할 때 콜백함수를 사용한다.
app.get('/news', (req, resp) => {
    resp.send('오늘의 날씨는 00입니다.')
})

app.get('/shop', function(req, resp){
    //file을 보낼 때,
    resp.sendFile(__dirname + '/index.html')
})

//숙제
app.get('/about', (req, resp) => {
    resp.sendFile(__dirname + '/about.html')
})