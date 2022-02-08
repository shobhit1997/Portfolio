<template>
    <div style="flex-grow : 1; min-height:52vh;">
        <section class="intro">
            <div class="row" style="padding:20px">
                <div class="col-lg-3 col-sm-12 left">
                    <img src="../assets/shobhit.png">
                </div>
                <div class="col-lg-9 col-sm-12 right" style="margin-top:12px;font-size: medium;">
                    <p>I am working as a <b>Software Development Engineer 2</b> at <b>Hackerrank</b>, Bangalore. I work with the Hackerrank Community team. As a part of the team my role is to build features that cater to the larger developer Community . 
                    <br><br>
                     I work on various technologies including <b> Backend (Node.js, Java, Ruby), Docker, Kubernetes, Cloud(AWS),</b> etc. 
                     I enjoy working in an environment of growth and learning. 
                     <br>
                     I call myself a <b>language independent</b> software developer. I believe by understanding the basic framework of how development is done, how different pieces are connected, a developer can implement it in any language.
                     Every programming language or technology has its own pros and cons. A developer needs to choose the best which fits in his design, not the one he is comfortable in.
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
