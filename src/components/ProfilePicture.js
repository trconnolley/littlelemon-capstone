
const ProfilePicture = (UserImage) => {
    //TODO: Just need to figure out the how to import the image: nothing I do seems to work
    return (
        <>
        <svg
            width="200"
            height="200">
            <defs>
                <mask id="Mask">
                    <circle cx="100" cy="100" r="100" fill="#d8d8d8" />
                </mask>
            </defs>

            <image
                    mask="url(#Mask)"
                    preserveAspectRatio="xMidYMid meet" x="0" y="0"
                    href='/man.jpg'
                    width="100%" height="100%"
            />
        </svg>
        </>
    )
}

export default ProfilePicture;