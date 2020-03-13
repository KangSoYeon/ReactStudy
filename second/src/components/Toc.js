import React, {Component} from 'react';

class TOC extends Component{
    render(){
        var lists = [];
        //부모가 전달한 state를 자식은 props의 형태로 사용
        var data = this.props.data; 
        var i=0;
        while(i<data.length){
            lists.push(<li key={data[i].id}><a href={"/content/" + data[i].id}>{data[i].title}</a></li>)
            i=i+1;
        }
        return(
            <nav>
                <ul>
                   {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;