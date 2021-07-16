<script>
import custom from './utils/custom'
export default {
  onLaunch: function() {
    custom.intTitleNav()
    console.log('App Launch')
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
	/*每个页面公共css */
  @import "style/icon.scss";
  @import "style/main.scss";
  
  .container {
    background: $page-color-base;
  }
</style>
