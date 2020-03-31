import React, { Component } from "react";

class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      autoToggle: [{ auto: true, time: 3000 }],
      //openAtStart和isOpen同步
      openAtStart: true,
      isOpen: true,
      transition: true,
      imgClass: ""
    };
  }

  handleClick() {
    if (this.state.transition) {
      //公有變數?
      // imgClass = "img-cd" + (this.state.isOpen ? "closing" : "opening");
      this.setState({
        imgClass: "img-cd " + (this.state.isOpen ? "closing" : "opening")
      });
    }

    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    if (this.state.autoToggle[0].auto) {
      this.timer = setTimeout(() => {
        this.handleClick();
      }, this.state.autoToggle[0].time);
    }
  }

  componentWillUnmount() {
    // 如果存在this.timer，則使用clearTimeout清空。
    // 如果你使用多個timer，那麼用多個變數，或者用個陣列來儲存引用，然後逐個clear
    this.timer && clearTimeout(this.timer);
  }

  render() {
    // if (this.state.openAtStart) {
    //   this.setState({ isOpen: true });
    // }
    // Error: Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.

    let imgUrl =
      "https://fakeimg.pl/1200x" +
      (this.state.isOpen ? "300" : "80") +
      "/#a4b0b5/";

    let btnText = this.state.isOpen ? "收合" : "展開";

    let btnClass = "btn " + (this.state.isOpen ? "opened" : "closed");

    return (
      <React.Fragment>
        <a id="img-block" href="#">
          <img
            src={imgUrl}
            title="輸入廣告促銷說明文字"
            alt="輸入廣告促銷說明文字"
            className={this.state.imgClass}
          />
        </a>
        <div id="btn-block">
          <button className={btnClass} onClick={() => this.handleClick()}>
            {btnText}
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Banner;
