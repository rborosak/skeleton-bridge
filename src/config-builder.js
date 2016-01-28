/**
* Plugin configuration builder
*/
export class ConfigBuilder {

  useGlobalResources: boolean = true;
  globalResources = [];

  /**
  * Use my control
  */
  useClickCounter(): ConfigBuilder {
    this.globalResources.push('./click-counter');
    return this;
  }

  useNavbar() : ConfigBuilder {
    this.globalResources.push('./navbar/navbar');
    this.globalResources.push('./navbar/navbarbrand');
    this.globalResources.push('./navbar/navbarcollapse');
    this.globalResources.push('./navbar/navbarheader');
    this.globalResources.push('./navbar/navbarnav');
    this.globalResources.push('./navbar/navbartoggle');

    return this;
  }

  /**
  * Don't globalize any resources
  * Allows you to import yourself via <require></require>
  */
  withoutGlobalResources(): ConfigBuilder {
    this.useGlobalResources = false;
    return this;
  }
}
