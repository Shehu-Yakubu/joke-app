function Joke(props) {
    return (
        <div className="joke">
            <h3 className="joke--setup">{props.setup}</h3>
            <p className="joke--punchline">{props.punchline}</p>
            <hr className="joke--line" />
            <p>{props.rating}</p>
        </div>
    )
}

export default Joke