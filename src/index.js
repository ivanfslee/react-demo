import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';


const App = () => {
    const avatar = faker.image.avatar();
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Yesterday at 5:00PM" comment="Wooooo!!" avatar={avatar} />
            <CommentDetail author="Coco" timeAgo="Today at 2:34PM" comment="Great post~" avatar={avatar} />
            <CommentDetail author="Stark" timeAgo="Today at 3:45PM" comment="Nice!" avatar={avatar} />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

