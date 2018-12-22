console.log("Hello World");

new Vue({
    el: '#blog',
    data: () => ({
      json: {},
      api_key: "",
      isShowing: false,

    }),
    
    created: function() {
        console.log(api_key.value);
        var apikey = api_key.value;
        var url = "https://app.blogscript.co/api/" + apikey;
      fetch(url).then((response) => {
        return response.json().then((json) => {
          console.log(json);
          this.json = json;
        })
      })
    },
  
  });

  var filter = function(text, length, clamp){
    clamp = clamp || '...';
    var node = document.createElement('div');
    node.innerHTML = text;
    var content = node.textContent;
    return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter('truncate', filter);