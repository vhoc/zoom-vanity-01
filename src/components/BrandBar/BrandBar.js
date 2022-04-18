const BrandBar = ( { backgroundColor, foregroundColor, logo, companyName } ) => {

    return (
        <div
            className="w-full flex flex-col justify-center items-center p-5 rounded-lg"
            style={
                {
                    backgroundColor: backgroundColor,
                    color: foregroundColor,
                }
            }
        >
            <img style={ { maxWidth: 160 } } src={ logo } alt={ companyName } />

            <h1 className="text-2xl" >
                { companyName }
            </h1>

            <h2 className="text-lg" >Videoconferencias Zoom<span className="text-xs">&copy;</span></h2>
        </div>
    )

}

export default BrandBar