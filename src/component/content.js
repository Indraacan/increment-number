import React, { Component } from 'react'
import styled from 'styled-components'


class Content extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    IncrementItem = () => {
      this.setState({count :  this.state.count+ 1 });
    }
    DecreaseItem = () => {
      this.setState({count : this.state.count - 1 });
    }
    // ToggleClick = () => {
    //   this.setState({ show: !this.state.sh});
    // }
    reset =()=> {
        this.setState({count:this.state.count= 0});
      };
  
    render() 
    {
        let showData
        if( this.state.count < 0){
            window.alert('Gak boleh angka minus bodat')
            this.state.count = 0
        }else{
            showData = this.state.count
        }
      return (
          
        <div>
            
            <Line>
          <Button onClick={this.IncrementItem}>+</Button>
          <Header>{ <h2>{ this.state.count}</h2>}</Header>
          <Button  onClick={this.DecreaseItem}>-</Button>
          </Line>
          <Button onClick={this.reset}>Reset</Button>
          
       </div>
      );
    }
  }
  
  export default Content;

  const Button = styled.button`
        color : white;
        background-color : palevioletred;
        font-size : 50px ;
        Border-radius : 20px;  
        margin : 20px;   `

    const Line = styled.div`
    display: flex;
    flex-direction: row;
    justify-content : center;
    
    `
    const Header = styled.h2`
    text-size : 20px;
    `
    