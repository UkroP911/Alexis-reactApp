import React, {Component} from 'react';

import TeamMember from '../../components/TeamMember';

class Team extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: [],
            loaded: false,
            loading: false,
            image: []
        }
    }

    componentWillMount(){
        this.setState({loading: true});
        fetch('https://randomuser.me/api/?results=4')
            .then(response => response.json())
            .then(obj => obj.results)
            .then(data => this.setState({
                loaded: true,
                loading: false,
                data
            }));
    }

    render() {
        const {data, loading} = this.state;
        return (loading) ?
            <div>Loading...</div> :
            <div className="team" id="team">
                <div className="wrapper">
                    <div className="team__content">
                        <div className="section__title section__title_team">
                            <h2>Our Team.</h2>
                        </div>
                        <div className="section__subtitle section__subtitle_team">We understand your requirement and provide quality works.</div>
                        <div className="team__members">
                            {
                                data.map((person, index) => {
                                    const {first,last} = person.name
                                    return <TeamMember key={index} person={person.name}
                                                       first={first.charAt(0).toUpperCase() + first.slice(1)}
                                                       last={last.charAt(0).toUpperCase() + last.slice(1)}
                                                       avatar={person.picture.large}

                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
    }
}

export default Team;
