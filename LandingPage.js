function changeService(card) {
    if (card == 'web') {
        document.getElementById('web').classList.add('unhidden');
        document.getElementById('uxui').classList.remove('unhidden');
        document.getElementById('social').classList.remove('unhidden');
        document.getElementById('graphic').classList.remove('unhidden');
        document.getElementById('website').classList.remove('unhidden');
        document.getElementById('seo').classList.remove('unhidden');
    }
    else if (card == 'uxui') {
        document.getElementById('web').classList.remove('unhidden');
        document.getElementById('uxui').classList.add('unhidden');
        document.getElementById('social').classList.remove('unhidden');
        document.getElementById('graphic').classList.remove('unhidden');
        document.getElementById('website').classList.remove('unhidden');
        document.getElementById('seo').classList.remove('unhidden');
    }
    else if (card == 'social') {
        document.getElementById('web').classList.remove('unhidden');
        document.getElementById('uxui').classList.remove('unhidden');
        document.getElementById('social').classList.add('unhidden');
        document.getElementById('graphic').classList.remove('unhidden');
        document.getElementById('website').classList.remove('unhidden');
        document.getElementById('seo').classList.remove('unhidden');
    }
    else if (card == 'graphic') {
        document.getElementById('web').classList.remove('unhidden');
        document.getElementById('uxui').classList.remove('unhidden');
        document.getElementById('social').classList.remove('unhidden');
        document.getElementById('graphic').classList.add('unhidden');
        document.getElementById('website').classList.remove('unhidden');
        document.getElementById('seo').classList.remove('unhidden');
    }
    else if (card == 'website') {
        document.getElementById('web').classList.remove('unhidden');
        document.getElementById('uxui').classList.remove('unhidden');
        document.getElementById('social').classList.remove('unhidden');
        document.getElementById('graphic').classList.remove('unhidden');
        document.getElementById('website').classList.add('unhidden');
        document.getElementById('seo').classList.remove('unhidden');
    }
    else if (card == 'seo') {
        document.getElementById('web').classList.remove('unhidden');
        document.getElementById('uxui').classList.remove('unhidden');
        document.getElementById('social').classList.remove('unhidden');
        document.getElementById('graphic').classList.remove('unhidden');
        document.getElementById('website').classList.remove('unhidden');
        document.getElementById('seo').classList.add('unhidden');
    }
}