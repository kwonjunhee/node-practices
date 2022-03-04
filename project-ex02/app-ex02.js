/*
posco-ict-math 파일 모듈 테스트

로컬 배포
$[project-ex02] npm i ../posco-ict-math
명령으로 설치 후 테스트할 것.
*/

var poscoMath = require("posco-ict-math"); // 모듈이 되는 파일이름 명시

console.log(poscoMath.sum(10, 20, 30, 40, 50));
console.log(poscoMath.max(10, 20, 30, 40, 50));
console.log(poscoMath.min(10, 20, 30, 40, 50));