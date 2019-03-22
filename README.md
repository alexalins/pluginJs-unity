# pluginJs Unity

### Plugin para salvar dados do jogo no localStorage em jogos usando WebGL

### Criando
##### Diretórios
```
  Assets\Plugins\WebGL\SeuPlugin.jslib
```
#### importando no C#
```
using System.Runtime.InteropServices;
```
#### Chamando a função Js
```
  [DllImport("__Internal")]
  private static extern void myFunction();
```

##### [PLugin.jslib](https://github.com/alexalins/pluginJs-unity/blob/master/Assets/Plugins/WebGL/PluginName.jslib)
##### [Código C#](https://github.com/alexalins/pluginJs-unity/blob/master/Assets/Script/TesteScript.cs)
