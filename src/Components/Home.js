import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
import Axios from 'axios'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords: [],
            word: ''
        }
    }


    // componentWillMount() {
    //     const url = 'http://localhost:8080/word-search'
    //     Axios.get(url)
    //         .then(promise => {
    //             const keywords = promise.data
    //             // console.log(keywords)
    //             this.setState({
    //                 keywords: keywords
    //             })
    //         })
    // }

    // findKeywordMath = (searchWord) => {
    //     const regex = new RegExp(searchWord)
    //     return this.state.keywords.filter((keyword) => {
    //         return keyword.word.match(regex)
    //     })
    // }

    handleChangle = (event) => {
        const value = event.target.value
        console.log(value)
        Axios
            .get(`http://127.0.0.1:8000/searchword/search?query=${value}`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    keywords: response.data
                })
            })
    }

    render() {
        const { keywords } = this.state
        return (
            <div>
                <input
                    type="text"
                    placeholder='Search Keyword'
                    value={this.value}
                    onChange={this.handleChangle}
                    className='textInput'
                />
            </div>
        )
    }
}
