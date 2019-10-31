class Homepage extends React.Component {
	render(){
		return (
            <div>
            <h1> Check out all our trading cards!</h1>
            <a href="/cards">Click Here to View the Cards</a><br />
            <img src="/static/img/balloonicorn.jpg" />
            </div>
            );
	}
}

ReactDOM.render(<Homepage />, document.getElementById('app'));