import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class ExpansionPanels extends Component {
    state = {
        expanded: true,
        data: this.props.data,
    };

    handle_change = () => {
        var expand_or_not = false;
        if (this.state.expanded) {
            expand_or_not = false;
        } else {
            expand_or_not = true;
        }
        this.setState({
            expanded: expand_or_not,
        })
    }

    generate_panels = () => {
        const { data } = this.state

        let all = []
        for (var index in data) {
            all.push(
                <ExpansionPanel
                    expanded={this.state.expanded}
                    onChange={ () => {
                        this.handle_change()
                    }}
                >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{data[index]['category']}</Typography>
                    </ExpansionPanelSummary>
                    
                    <ExpansionPanelDetails>
                        <Tooltips
                            elements={data[index]['elements']}
                        ></Tooltips>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            )
        }
        return all
    }

    render() {
        return (
            <div>
                {this.generate_panels()}
            </div>
        );
    }
}

export class Tooltips extends Component {
    state = {
        elements: this.props.elements
    }

    handle_click = (url) => {
        window.open(url, "_blank")
    }

    generate_elements = () => {
        const { elements } = this.state

        let all = []
        for (var index in elements) {
            all.push(
                <Tooltip title={elements[index]['description']}>
                    <Button
                        onClick={ () => {
                            this.handle_click(elements[index]['url'])
                        } }
                        style={{
                            textTransform: 'none'
                        }}
                    >
                        {elements[index]['title']}
                    </Button>
                </Tooltip>
            )
        }

        return all
    }

    render() {
        return (
            <div>
                {this.generate_elements()}
            </div>
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
                <ExpansionPanels
                    data = {this.state.data}
                ></ExpansionPanels>
            </div>
        );
    }
}

export default Navigation;
