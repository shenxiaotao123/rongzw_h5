<template>
    <div style="text-align: center;    text-indent: 7vw;">

      <mtitle :titleC="titleC"/>
      <img src="../../assets/img/my/logo.png" width="180" style="margin:8vw"/>
      <p class="white">
        人类从印刷术开始历经多次技术革新，到今天互联网技术蓬 勃发展，万物互联使得人们接触信息由原来的不对等到现在信息 自由获取，极大的提高了社会工作效率和效能。技术进步引领企业变革，其最终实质是还权于民，这真是荣装网站创立初衷。荣装网是浙江联合创展科技股份有限公司投资的泛家装生态聚合平台，传统与互联网家装的整合，德系互联网家装标准践行者。荣装网致力于用互联网思维及技术，改变传统家装行业产业链，去掉层层中间环节修最短路径，实现消费者利益的最大化，重塑行业的新商业文明。
      </p>
      <p class="white">
        荣装网，作为传统家装的改革者和革命者，以新型互联网家装公司的理念，成长迅猛，获得了总舵用户的青睐，现已成立杭州、丽水、温州、宁波等分公司，并将继续拓展全国市场，造福更多百姓，真正开启快乐装修之旅。
      </p>

      <p class="about_us_title">
        荣装·互联网家装优势
      </p>
      <p class="white">
        传统家装行业存在信息不对称、不透明、服务链条过长、恶 意加价、个性化与标准化需求兼顾等诸多痛点。互联网家装就是在这样的环境下应运而生，具有价格透明、简单使个性装修需求最大程度实现标准化，是传统家装行业未来发展的必然趋势。
      </p>
      <p class="white">
        基于种种传统家装弊病，荣装网在创立初期就开始研究家装电商模式，致力于提供标准、简单、透明的互联网家装，知情、选择、评价、分享，真正实现还权于民。
      </p>
      <p class="white">
        荣装网启用家装电商
      </p>
    </div>
</template>

<script>
    export default {
        name: "AboutUs",
      components:{
        mtitle:() => import('@/public/TextTitle')
      },
      data(){
        return{
          titleC: {
            type: 'text',
            content: '联系我们'
          }
        }
      }
    }
</script>

<style scoped>
  p {
    line-height: 5vw;
    font-size: x-small;
    padding: 3.5vw;
    text-align: left;
  }

</style>
