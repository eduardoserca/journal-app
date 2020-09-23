import React from 'react'
import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {
    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="What happend today"
                    className="notes__textarea"
                />

                <div className="notes_image">
                    <img
                        src="https://4.bp.blogspot.com/-_BzgXBSjk_0/T_4sJVqWseI/AAAAAAABAAE/TP5VsIBtTEU/s400/tigre-de-amur-tiger-animales-felinos-salvajes-s.jpg"
                        alt="imagen" 
                    />
                </div>

            </div>

        </div>
    )
}

export default NoteScreen
