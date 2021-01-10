# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?

Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### Not Familiar with Git?

Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file. Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```

### What I Learned From this Lecture(Kwan Ik) ↓↓

#### 1. What is React?

- 리액트란 Javascript Library의 일종으로, 우리가 만든 Component는 HTML을 만들어 낼 것이고, 본 component들을 새롭게 배치함을 통해서 Web을 만들어 낼 것임.

- 하지만 Browser가 이를 바로 이해할 수는 없기 때문에, JSX를 Vanilla Javascript로 변환해줄 Babel과 Webpack과 같은 장치를 이용함.

- JSX를 사용하는 가장 단순한 이유는 code의 가시성 및 의미다. return하는 타입만을 통해서 직관적으로 어떤 형태를 return 할 지 알 수 있기 때문.

- React DOM

  - React가 Component를 생성하고 관리한다면, React DOM은 실제 DOM과 상호작용한다.

- React App 은 서로 다른 수많은 Component들로 이루어진다. 그리고 이 Component들은 서로 다른 목적을 가지게 된다.
  => 이는 곧 코드의 재사용성을 높이게 된다.

#### 2. Export, Class, State

- Export : ES6에서 제공하는 기능으로, 다른 Javascript에서 다른 file의 요소를 참조하기 위함
- 함수형 Component vs Class 기반 Component의 선택 조건은 ??
- State : React에서 가장 이해하기 어려운 요소 중 하나로,자바스크립트 객체로 유저 이벤트를 저장하고 반응하는데 사용되는 요소. Component의 State가 변경될 때마다 즉시 Render가 다시 이루어지게 된다. 단, Class 기반의 Component만 State를 가진 다는 것을 주의 해야 한다.
  또한, State를 변경할 때는 'this.state.something = value'로 변경하는 것이 아닌, 'this.setState'로 변경함

#### 3. Event Handler

- Function을 정의하고 이를 기존 HTML의 Event 요소들과 Binding 해주면 됨
- Controlled Component : State에 의해 값이 지정되는 요소(제어 요소)

#### 4. Props

- 자식 요소에게 Props를 전달해줘야 함
- 단, Class 형 component인 경우에는 this.props로 선언해줘야 함
- property에 callback을 전달함으로써, 부모 Component와 자식 Component간 소통이 가능해짐

#### 5. Redux

- React가 Component Level이라면 Redux는 Application 단위라고 볼 수 있음

#### TROUBLE SHOOTING

1. Target container is not a DOM element.

- React DOOM 이 렌더링을 하려하지만 어디에 Rendering을 할지 모르겠다.
- Taret Container 즉, HTML 노드가 필요하단 것
- ReactDOM.render(\<App /\>, _document.querySelector('.container'_));

2. Each child in an array or iterator should have a unique "key" prop.

- React는 과하게 영리한 부분이 있어, 추후 List를 modify하기 위해서는 각각의 ID를 부여해줘야 한다.
- 이는 Process를 효율적으로 진행하게 도와주나, 해당 error를 뿜지 않기 위해 주의해야 한다.
- key={}
