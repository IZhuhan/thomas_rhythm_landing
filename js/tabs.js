$( '.nav-tabs' ).on( 'click', 'li', function( e ) {
    e.preventDefault();

    const tabControls = $( this ).closest( '.nav-tabs' ).find( 'li' );
    const tabPanes = $( this ).closest( '.nav-tabs' ).next().find( '.tab-pane' );
    const id = $( this ).find( 'a' ).attr( 'href' );

    tabControls.removeClass( 'active' );
    tabPanes.removeClass( 'active in' );

    $( this ).addClass( 'active' );
    $( `.tab-pane${ id }` ).addClass( 'active' ).fadeIn().addClass( 'in' );
});