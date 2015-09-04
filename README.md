iamroot IoT 1st scenario team
==============================

    기본 내용부터 Step by Step 으로 진행하려고 합니다.
    진행과정에서, 기능들을 확장해가면서 진행할 예정입니다.
    큰 흐름은, "Sensing < Connecting < Actuating < Thinking" 입니다.
    아두이노 -> Rasapberry Pi 순으로 진행될 계획입니다.
    
    * slack : https://iamrootiot1stscen.slack.com/
    * trello : https://trello.com/b/WcNS4ItQ/arduino
    * github : https://github.com/iamrootiot1stscen/iotstudy

History
-------

| week  | date      | place             | contents         |
|:----- |:--------- |:------------------|:---------------- |
| [18주차](notes/2015-09/2015-09-04-meeting.md)| 2015-09-04 | 경기 문화 창조 허브  | OSS 프로젝트 일정 수립 및 기능 정의 |
| [17주차]()| 2015-08-21 | 경기 문화 창조 허브  | OSS 프로젝트 기술 검토 및 정보 교환 |
| [16주차]()| 2015-08-13 | 양재  | OSS 프로젝트 기술 검토 및 자료 수집 |
| [15주차](notes/2015-08/2015-08-07-review.md)| 2015-08-07 | 경기 컨텐츠 랩  | 라즈베리파이 실습 / Node.js / BLE 기술 검토 |
| [14주차](notes/2015-07/2015-07-24-review.md)| 2015-07-24 | 경기 문화 창조 허브 | 라즈베리파이 실습 |
| [13주차]()| 2015-07-17 | 경기 문화 창조 허브 | 라즈베리파이 실습 |
| [12주차]()| 2015-07-10 | 경기 문화 창조 허브 | 아두이노 실습, 안드로이드 |
| [11주차]()| 2015-07-03 | 경기 문화 창조 허브 | 아두이노 실습 |
| [10주차]()| 2015-06-26 | 경기 문화 창조 허브 | 아두이노 실습 |
| [9주차](notes/2015-06/2015-06-note.md) | 2015-06-19 | 경기 문화 창조 허브 | 아두이노 실습 |
| [8주차](notes/2015-06/2015-06-note.md) | 2015-06-12 | 경기 문화 창조 허브 | 아두이노 다운 로드 및 실습 |
| 7주차 | 2015-06-05 | 경기 문화 창조 허브 | 향후 진행 내용 결정 |

### 18주차 / 2015-09-04 / 2명

* 장소 예약 : 최현이님
* LED 켜기, 최현이님 진행 내용 공유
* 9/18까지 진행할 내용 정의

### 17주차 / 2015-08-21 / 2명

* 장소 예약 : 최현이님
* 지난 주 진행했던 내용 정보 공유
* LED 조사 및 선정
* Steop 1. 진행 방향 논의
    * BLE를 이용한 LED ON
    * Wi-Fi를 이용한 Data 전달
* Node.js, thingspeak.com, Google chart API
* 전반적인 Architecture, SW Architecture 논의
* OSS 프로젝트 기술 검토 및 자료 수집
* 차주는 휴가로 인해 스터디 휴식

* ref
   - http://blog.gaerae.com/2015/08/how-to-turn-your-house-into-a-club.html
   - http://www.brit.co/led-diy-projects/
   - http://www.instructables.com/id/Bluetooth-RGB-Shelf-Lighting/
   - http://www.instructables.com/id/Pixel-Drop-Ceiling/
   - http://bit.ly/1NzNfWh

* Action Item
    * LED 구매
    * BLE 통신 SW 구현 및 HW 구성
    * Wi-Fi 기능 구현

### 16주차 / 2015-08-13 / 1명
* 장소 예약 : 최현이님
* OSS 프로젝트 기술 검토 및 자료 수집

* ref
   - http://blog.gaerae.com/2015/08/how-to-turn-your-house-into-a-club.html
   - http://www.brit.co/led-diy-projects/
   - http://www.instructables.com/id/Bluetooth-RGB-Shelf-Lighting/
   - http://www.instructables.com/id/Pixel-Drop-Ceiling/

* Action Item
    * 실습 주제를 미리 준비할 것.

### 15주차 / 2015-08-07 / 2명
* 장소 예약 : 보름달님
* 라즈베리파이 Node.js / BLE 기술 검토

* ref
   - http://www.nextree.co.kr/p8574/
   - http://www.slideshare.net/rippertnt/iot-make-with-open-hw-nodejs-2nd?related=3

* Action Item
    * 차주는 여름 휴가로 인해 한 주 휴식입니다.
    * 실습 주제를 미리 준비할 것.
    * yee-light sample 준비

### 14주차 / 2015-07-24 / 2명
* 장소 예약 : 보름달님
* 라즈베리파이 Node.js 실습

* Action Item
    * 차주는 여름 휴가로 인해 한 주 휴식입니다.
    * 실습 주제를 미리 준비할 것.


### 13주차 / 2015-07-17 / 2명
* 장소 예약 : 보름달님
* 아두이노 다운 로드 및 실습
* 아두이노 안드로이드 SDK 실습
* BLE, 아두이노-안드로이드 통신 프로그램 분석

* Action Item
    * 라즈베리 파이 실습 예정
    * 차주 역시 실습으로 진행될 예정이며
    * 실습 주제를 미리 준비할 것.


### 12주차 / 2015-07-10 / 2명
* 장소 예약 : 보름달님
* 아두이노 다운 로드 및 실습
* 아두이노 안드로이드 SDK 실습
* BLE, 아두이노-안드로이드 통신 프로그램 분석

* Action Item
    * 라즈베리 파이 실습 예정
    * 차주 역시 실습으로 진행될 예정이며
    * 실습 주제를 미리 준비할 것.


### 11주차 / 2015-07-03 / 2명
* 장소 예약 : 최현이님
* 아두이노 다운 로드 및 실습
* 라이브러리 작성 및 실습
* SPI 통신 실습 / 소스 코드 분석
* 프로젝트 논의 - LED, 소리데이타 수집 방법 및 구조 논의

* Action Item
    * 차주 역시 실습으로 진행될 예정이며
    * 실습 주제를 미리 준비할 것.

### 10주차 / 2015-06-26 / 2명
* 장소 예약 : 보름달님
* 아두이노 다운 로드 및 실습
* C/C++ 기본 문법 테스트
* LED Digital / Analog로 컨트롤

* Action Item
    * 차주 역시 실습으로 진행될 예정이며
    * 실습 주제를 미리 준비할 것.

### 9주차 / 2015-06-20 / 3명
* 장소 예약 : 보름달님
* 아두이노 다운 로드 및 실습
* C/C++ 기본 문법 테스트
* LED Digital / Analog로 컨트롤

* Action Item
    * 차주 역시 실습으로 진행될 예정이며
    * 실습 주제를 미리 준비할 것.

### 8주차 / 2015-06-14 / 2명
* 장소 예약 : 보름달님
* 아두이노 다운 로드 및 실습
* [강의자료 코딩클럽 아두이노 워크 - 1](http://www.slideshare.net/Muzikino/1-46771984)으로 진행

* Action Item
    * 차주는 실습으로 진행될 예정이며
    * 실습 주제를 미리 준비할 것.


### 7주차 / 2015-06-05 / 3명
* 장소 예약 : 보름달님
* 향후 진행 내용
    * Step by Step으로 진행
    * 매주 금요일 3h 진행
    * 자료는 인터넷의 자료 활용

* Action Item
    * 아두이노 구매
    * 프로젝트 기획안은 별도 진행.


Reference & Resources
---------------------

* [“아파트 ‘난방 코딩’, 이런 게 IoT 아닌가요?”](http://blog.appcenter.kr/2015/02/valvegod/)
* [사물인터넷 비즈니스 사례 분석을 통한 사업화 전략 수립](http://www.slideshare.net/honest72/ss-47586778)

### Articles
1. [Gartner Says the Internet of Things Installed Base Will Grow to 26 Billion Units By 2020](http://www.gartner.com/newsroom/id/2636073)
2. [‘전구’가 밝히는 사물인터넷 혁명](http://jmagazine.joins.com/newsweek/view/306731)
3. [IoT 단체 춘추전국시대··· 통일 조짐은 2016년에나](http://www.ciokorea.com/news/23518?page=0,0)


### Aduino
* mother site - http://www.arduino.cc/
* Arduino github - https://github.com/arduino/Arduino (source codes).
* Arduino getting started tutorialshttp://www.ntu.edu.sg/home/ehchua/programming/arduino/Arduino.html
* Oomlout - http://oomlout.com/oom.php (Arduino getting started tutorials).
* Sparkfun - https://www.sparkfun.com (Electronic components with datasheets).
* 아두이노 강좌
    - http://studymake.tistory.com/113
    - 아두이노 / 라즈베리 강좌 및 영상 모음 - http://m.cafe.naver.com/educoding/1264

### Raspberry Pi
* mother site - https://www.raspberrypi.org/


External Links
---------------
* [List of open-source hardware projects](https://en.wikipedia.org/wiki/List_of_open-source_hardware_projects)

### 단체
* All Seen - https://allseenalliance.org/
* OIC - https://www.iotivity.org/
* Thread group - http://threadgroup.org/
* IEEE P2413 - https://standards.ieee.org/develop/project/2413.html
    * pdf - http://grouper.ieee.org/groups/2413/Intro-to-IEEE-P2413.pdf
* IIC(Industrial Internet Consortium) - http://www.industrialinternetconsortium.org/

### Vendor
* Nest - https://nest.com/
* Z-wave - http://www.z-wave.com/
* Apple Home kit - https://developer.apple.com/homekit/
* Google brillo - https://developers.google.com/brillo/
