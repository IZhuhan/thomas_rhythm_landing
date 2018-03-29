$( '.nav-tabs' ).on( 'click', 'li', function( e ) {
    e.preventDefault();

    const tabControls = $( this ).closest( '.nav-tabs' ).find( 'li' );
    const tabPaneActive = $( this ).closest( '.nav-tabs' ).next().find( '.tab-pane.active' );
    const id = $( this ).find( 'a' ).attr( 'href' );

    tabControls.removeClass( 'active' );
    $( this ).addClass( 'active' );

    tabPaneActive.fadeOut( () => {
        tabPaneActive.removeClass( 'active' );
        $( id ).fadeIn( () => $( id ).addClass( 'active' ) );
    });
});