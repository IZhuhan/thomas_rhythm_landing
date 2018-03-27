const navTabs = $( '.nav-tabs' );

navTabs.on( 'click', function( e ) {
    e.preventDefault();

    const tabControls = $( e.target ).closest( '.nav-tabs' ).find( 'li' );
    const activeTab = $( e.target ).closest( 'li' );

    const id = activeTab.find( 'a' ).attr( 'href' );

    const tabPanes = $( e.target ).closest( '.nav-tabs' ).siblings().find( '.tab-pane' );
    const activePane =  $( `.tab-pane${ id }` );

    tabControls.removeClass( 'active' );
    tabPanes.removeClass( 'active in' );

    activeTab.addClass( 'active' );
    activePane.addClass( 'active' ).fadeIn().addClass( 'in' );
});