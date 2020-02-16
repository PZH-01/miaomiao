<template>
    <footer id="footer">
        <ul>
            <router-link tag="li" to="/movie" activeClass="active">
                <img src="../../../public/movie.svg">
                <p>电影</p>
            </router-link>
            <router-link tag="li" to="/cinema" activeClass="active">
                <img src="../../../public/cinema.svg">
                <p>影院</p>
            </router-link>
            <router-link tag="li" to="/mine" activeClass="active">
                <img src="../../../public/mine.svg">
                <p>我的</p>
            </router-link>
        </ul>
    </footer>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style lang="scss" scoped>
    #footer{
        width: 100%;
        height: 50px;
        background: white;
        border-top: 2px #ebe8e3 solid;
        position: fixed;
        left: 0;
        bottom: 0px;
        ul{
            display: flex;
            text-align: center;
            height: 50px;
            align-items: center;
            li{
                flex: 1;
                height: 40px;
                i{
                    font-size: 20px;
                }
                p{
                    font-size: 12px;
                    line-height: 18px;
                }
            }
            img{
                flex: 1;
                width: 20px;
                height: 20px;
            }
        }
    }
    .active{
      color: #f03d37;
    }
</style>
