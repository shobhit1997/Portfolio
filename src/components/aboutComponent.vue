<template>
    <div style="flex-grow : 1; min-height:52vh;">
        <section class="intro">
            <div class="row" style="padding:20px">
                <div class="col-lg-3 col-sm-12 left">
                    <img src="../assets/shobhit.png">
                </div>
                <div class="col-lg-9 col-sm-12 right" style="margin-top:12px;font-size: medium;">
                    <p>I am a 4th-year undergraduate student. I am currently pursuing my B.Tech in CSE branch from the <b>JSS Academy of Technical Education</b>, Noida. I have a good academic record with an average of 84% overall till 3rd year. I am a tech enthusiast and love working on the latest technology. I work as a <b>Backend</b> and <b>Cloud Engineer</b> with expertise in <b>Node.js</b> and <b>AWS</b>. Apart from this I also work on the latest technologies like <b>GraphQL, Elastic Search, Docker</b> and have acquaintance with other cloud service providers like <b>GCP</b>. <br>
                    I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me and the success of your organization.<br>
                    Apart from my technical expertise I also have <b>projects and team management</b> skills. I am the CTC of <a href="http://www.hackncs.com" target="_blank">Nibble Computer Society</a> and representative of the CSE Department at JSSATE, Noida. Being a part of NCS, I not only learned how to develop an app but also learned how to work in a team and lead a project.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: "About"
};

</script>
<style>
.intro {
    height: 100%;
}

.left {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: 100%;
    color: #fff;
}

.right {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: 100%;
    color: #3d231b;
}

@media (max-width: 1200px) {
    .left {
        height: 50%;
    }

    .right {
        height: 50%;
    }
}

</style>
