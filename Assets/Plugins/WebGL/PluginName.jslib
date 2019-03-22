var MyPlugin = {
    save: function()
    {
      localStorage.setItem("texto", "Hello, World!");
    },
    get: function()
    {
      var texto = localStorage.getItem("texto");
      window.alert(texto);
      console.log(texto);
    }
};
mergeInto(LibraryManager.library, MyPlugin);
