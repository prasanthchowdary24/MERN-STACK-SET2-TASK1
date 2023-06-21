import React,{ Component} from "react";
import './s.css';
class A1 extends Component{
    constructor(props){
        super(props);
        this.props = props; 
        this.state ={
            n : this.props.name,
            cnt : 0 
        };
    }
     b=()=> {
        alert("hello");
    };
    tst=()=>{
        var sentence = document.getElementById('para').value;
        var count = sentence.split(" ");
        var tot = count.length;
        this.setState({cnt: tot})
        console.log(tot);   
    }
    render(){
        return(
            <div  className="bod">
                <div className='h'> Responsive Paragraph Word Counter</div>
                <div>
                    <textarea id="para" className="s" type="text" placeholder="enter a sentence" onChange={this.tst} /> 
                </div>
                <div className="result">Word Count: {this.state.cnt}</div>
            </div>
        )
    }
}

export default A1;