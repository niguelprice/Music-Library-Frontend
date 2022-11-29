






const DisplayMusic = (props) => {
    return ( 
        <table>
            <thead>
            <tr>
                <th>title</th>
                <th>artist</th>
                <th>album</th>
                <th>release_date</th>
                <th>genre</th>
            </tr>
            </thead>
            <tbody>
            {props.parentSongs.map((song) => {
                return (
                <tr>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                    <td>{song.release_date}</td>
                    <td>{song.genre}</td>
                </tr>
                );
            })}
            </tbody>
        </table>
     );
}
 
export default DisplayMusic;