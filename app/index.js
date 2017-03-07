var USER_DATA = {
  'name': 'Jai Tiwari',
  'username': 'braincap',
  'imageUrl': 'https://avatars2.githubusercontent.com/u/11663988'
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
  render: function () {
    return (
      <img src={this.props.imageUrl} />
    )
  }
});

var ProfileName = React.createClass({
  render: function () {
    return (
      <div>{this.props.name}</div>
    )
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <a href={"https://github.com/" + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
});

var Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfileName name={this.props.user.name} />
        <ProfilePic imageUrl={this.props.user.imageUrl} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
});

ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));