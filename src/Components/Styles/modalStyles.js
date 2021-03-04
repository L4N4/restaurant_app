export default {

    title: {
        position: 'absolute',
        top: '20px',
        left: '20%',
        margin: 'auto',
        width: '40%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 'large',
        fontWeight: '700'
    },

    h1: {
        fontSize: '24px',
        color: 'var(--secondary-color)',
    },


    /*-------------Articles shopping Cart-------------*/
    articles: {
        height: '35%',
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: '40px'
    },

    articleContainer: {
        margin: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },

    article: {
        position: 'relative',
        height: '90px',
        width: '100%',
        marginBottom: '15px',
        backgroundColor: 'rgb(233, 220, 145)',
        borderRadius: '12px',
        textAlign: 'center'
    },

    contents: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        padding: '0 40px 0 40px'
    },

    h4: {
        fontSize: '15px',
        color: 'var(--color-sombra-oscura-cian)'
    },

    p2: {
        position: 'absolute',
        right: '0%',
        width: '35px',
        fontSize: '14px',
        fontWeight: 'bold'
    },

    circle: {
        width: '25px',
        height: '25px',
        borderRadius: '50%',
        backgroundColor: 'var(--secondary-color)',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px'
    },

    buttonLeft: {
        right: '5px',
        bottom: '2px',
        position: 'absolute',
        cursor: 'pointer'
    },

    buttonRight: {
        right: '5px',
        top: '2px',
        position: 'absolute',
        cursor: 'pointer'
    }

}