const LinksMenu = ( { backgroundRgba, foregroundColor } ) => {

    return (
        <div
            className="w-full flex flex-col justify-center items-center p-5"
            style={
                {
                    background: backgroundRgba,
                    color: foregroundColor,
                }
            }
        >
            <h1 className="text-2xl" >
                Menú de Conferencias
            </h1>
        </div>
    )

}

export default LinksMenu