import React from 'react'
import { Tooltip } from 'antd';
import 'antd/dist/antd.css';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            select: 'dwad212'
        }
    }

    componentDidMount() {
        this.setState ({
            select: select()
        })
    }

    render() {
        return (
            <div>
                <Tooltip title={this.state.select}>
                    <p>Tooltip will show when mouse enter.Tooltip will show when mouse enter.
                        Tooltip will show when mouse enter.Tooltip will show when mouse enter.
                        Tooltip will show when mouse enter.Tooltip will show when mouse enter.
                        Tooltip will show when mouse enter.Tooltip will show when mouse enter.
                    </p>
                </Tooltip>
            </div>
        );
    }
}

function select() {
    return (
        document.onmouseup = document.ondbclick= function ondbclick(){
            let txt;
            if(document.selection){
                txt = document.selection.createRange().text
            }else{
                txt = window.getSelection()+'';
            }
            if(txt){
                return txt;
            }
        }
    )
}


