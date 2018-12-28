import React, { Component } from 'react';

import { ExpansionList, ExpansionPanel } from 'react-md';

import { Tooltipped } from 'react-md';

import { Button } from 'react-md';

const generate_elements = (elements) => {
    return elements.map(item => {
        return(
            <Tooltipped
                label={item['description']}
                position="top"
                delay={500}
            >
                <Button 
                    flat
                    style={{
                        textTransform: 'none'
                    }}
                    onClick={() => {
                        window.open(item['url'], "_blank")
                    }}
                >{item['title']}</Button>
            </Tooltipped>
        )
    })
}

const generate_panels = (data) => {
    let all = []
    for (var index in data) {
        all.push(
            <ExpansionPanel 
                label={data[index]['category']} 
                footer={null} 
                defaultExpanded
            >
                {generate_elements(data[index]['elements'])}
            </ExpansionPanel>
        )
    }
    return all
}

export class Panels extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ExpansionList
                style={{
                    minWidth: "70vw",
                }}
            >
                {generate_panels(this.props.data)}
            </ExpansionList>
        );
    }
}

export class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //data: this.props.data,
            data: [
                {
                    category: 'Image',
                    elements: [
                        {
                            title: 'AutoDraw',
                            url: 'https://www.autodraw.com/',
                            description: 'automate drawing',
                        },
                        {
                            title: 'waifu2x',
                            url: 'http://waifu2x.udp.jp/index.html',
                            description: 'Help you scale up your image',
                        },
                    ],
                },
                {
                    category: 'Music',
                    elements: [
                        {
                            title: 'Beat Blender',
                            url: 'https://experiments.withgoogle.com/ai/beat-blender/view/',
                            description: 'Dynamically create drum music',
                        },
                    ],
                },
                {
                    category: 'Video',
                    elements: [
                        {
                            title: 'Deep fake',
                            url: 'https://github.com/deepfakes/faceswap',
                            description: 'Change face in video',
                        },
                    ],
                },

            ],
        }
    }

    render() {
        return (
            <div>
                <Panels
                    data = {this.state.data}
                ></Panels>
            </div>
        );
    }
}

export default Navigation;
