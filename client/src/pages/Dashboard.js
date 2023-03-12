import TinderCard from 'react-tinder-card'
import {useEffect, useState} from 'react'
import ChatContainer from '../components/ChatContainer'

const Dashboard = () => {

    const characters = [
        {
            name: 'Zendaya Coleman',
            url: 'https://bigindynews.com/wp-content/uploads/2022/12/65832137-11564123-New_upload_Zendaya_dropped_in_on_Instagram_Wednesday_to_show_her-a-8_1671668107556.jpg'
        },
        {
            name: 'Jenna Ortega',
            url: 'https://i.pinimg.com/originals/b9/ec/8c/b9ec8c493fbfa8a45ce7fc1a08596dd5.jpg'
        },
        {
            name: 'Madison Beer',
            url: 'https://s.err.ee/photo/crop/2022/08/26/1585318h797bt46.jpg'
        },
        {
            name: 'Dua Lipa',
            url: 'https://www.mordeo.org/files/uploads/2021/07/Dua-Lipa-2021-Portrait-Photoshoot-4K-Ultra-HD-Mobile-Wallpaper-950x1689.jpg'
        },
        {
            name: 'Alexis Ren',
            url: 'https://preview.redd.it/beautiful-head-shots-from-ig-story-v0-1ngw7a9r5gha1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=6a39ba2c4a6c0e88df0115de849ee51029ad6786'
        }
    ]


    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing:' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }
    return (
        <>
            
            <div className="dashboard">
                <ChatContainer/>
                <div className="swipe-container">
                    <div className="card-container">

                        {characters?.map((character) =>
                            <TinderCard
                                className="swipe"
                                key={character.name}
                                onSwipe={(dir) => swiped(dir, character.name)}
                                onCardLeftScreen={() => outOfFrame(character.name)}>
                                <div
                                    style={{backgroundImage: "url(" + character.url + ")"}}
                                    className="card">
                                    <h3>{character.name}</h3>
                                </div>
                            </TinderCard>
                        )}
                        <div className="swipe-info">
                            {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard