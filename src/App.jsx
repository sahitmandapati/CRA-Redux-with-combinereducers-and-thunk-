import './App.css';
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { changeCount , increment as asyncIncrement } from './store/01-count';
import { addFavoriteThing, removeFavoriteThing } from './store/02-favoriteThings';
import { downvoteVideo, incrementViewCount, setYouTubeTitle, upvoteVideo } from './store/03-youTubeVideo';

function App() {

    const [addValue, setAddValue] = useState("")
    const [removeValue, setRemoveValue] = useState("")
    const [title, setTitle] = useState("")

    const count = useSelector(state => state.count)
    const favoriteThings = useSelector(state => state.favoriteThings)
    const youTubeVideo = useSelector(state => state.youTubeVideo)

    const dispatch = useDispatch()
    return (
        <div className="App">


            <h1>{count}</h1>
            <button onClick={() => dispatch(changeCount(-10))}>-</button>
            <button onClick={() => dispatch(changeCount(20))}>+</button>
            <button onClick={() => dispatch(asyncIncrement)}>+</button>

            <hr />

            <h1>{favoriteThings.map((item) => <p>{item}</p>)}</h1>
            <div>
                <label htmlFor="addThings">add things</label>
                <input type="text" name="addThings" id="addThings" onChange={(e) => setAddValue(e.target.value)} />
                <button type="submit" onClick={() => dispatch(addFavoriteThing(addValue))}>add</button>
            </div>

            <div>
                <label htmlFor="removeThings">remove things</label>
                <input type="text" name="removeThings" id="removeThings" onChange={(e) => setRemoveValue(e.target.value)} />
                <button type="submit" onClick={() => dispatch(removeFavoriteThing(removeValue))}>remove</button>
            </div>


            <hr />

            <div>
                <label htmlFor="title">title:</label>
                <input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} />
                <button type="submit" onClick={() => dispatch(setYouTubeTitle(title))}>title</button>

                <div>{youTubeVideo.title}</div>
                <div>{youTubeVideo.viewCount}</div>
                <div>{youTubeVideo.votes.up}</div>
                <div>{youTubeVideo.votes.down}</div>
                <button onClick={() => dispatch((incrementViewCount()))}>increase viewcount submit</button>
                <button onClick={() => dispatch((upvoteVideo()))}>upvote</button>
                <button onClick={() => dispatch((downvoteVideo()))}>downvote</button>
            </div>



        </div>
    )
}

export default App
