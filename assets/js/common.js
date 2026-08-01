$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
        $(this).parent().parent().find(".bibtex.hidden.open").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
        $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
    });
    $('button.more-authors').click(function() {
        var button = $(this);
        var expanded = button.attr('aria-expanded') === 'true';
        var hiddenAuthors = button.find('.more-authors-count').text();
        button.attr('aria-expanded', String(!expanded));
        button.attr('title', expanded ? 'click to view ' + hiddenAuthors : 'click to hide additional authors');
        button.find('.more-authors-count').prop('hidden', !expanded);
        button.find('.more-authors-list').prop('hidden', expanded);
    });
    $('a').removeClass('waves-effect waves-light');
});
