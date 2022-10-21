import './style.css'

export function Story() {
    return (
        <div className="container">

            {slice.map((suggestion, key) => (

                <div classname="user-elements">
                    <div>
                        <img className="image-user-story" src="https://github.com/peas.png" />
                    </div>

                    <span>Neymar jr</span>
                </div>

            ))}
            
            {/* <div classname="user-elements">
        <div>
            <img className="image-user-story" src="https://github.com/peas.png"/>
        </div>

        <span>Neymar jr</span>
    </div> */}
        </div>
    )
}