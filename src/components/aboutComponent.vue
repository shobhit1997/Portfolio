<template>
    <div style="flex-grow : 1; min-height:52vh;margin-bottom: 10vh;">
        <section class=" intro">
            <div class="row" style="padding:20px">
                <div class="col-lg-3 col-sm-12 left">
                    <img src="../assets/shobhit.png">
                </div>
                <div class="col-lg-9 col-sm-12 right" style="margin-top:12px;font-size: medium;">

                    <p>
                        I am a Senior Software Engineer at HackerRank, specializing in building robust and scalable backend
                        architectures. Working remotely, I leverage the flexibility of remote work to optimize productivity
                        and save time. While my expertise lies in backend development, I have also ventured into frontend
                        and infrastructure domains, expanding my skill set.<br><br>

                        A notable achievement of mine at HackerRank was successfully leading the upgrade of the monolithic
                        application's RDS from MySQL 5.7 to 8. This involved meticulous planning, coordinating with multiple
                        teams, and ensuring minimal system downtime and impact.<br><br>

                        Additionally, I played a pivotal role in the design and development of the HackerRank Engage
                        Application, contributing to its inception from scratch. I align features with business requirements
                        and provide valuable insights from the consumers' perspective. Ensuring the rapid delivery of
                        features to meet go-to-market plans and guiding junior team members in maintaining code quality and
                        reliability are among my key responsibilities.<br><br>

                        As a language-independent software developer, I emphasize understanding the fundamental framework of
                        development and the interconnectedness of components. This approach enables me to implement
                        solutions in any language, recognizing the pros and cons of each. I prioritize selecting the best
                        tools that align with design requirements, rather than relying solely on personal comfort.<br><br>

                        With diverse experiences spanning backend architecture, migration planning, and product development,
                        I bring a comprehensive skill set to every project. I am driven by the pursuit of excellence in
                        software engineering, aiming to deliver high-quality solutions that positively impact end-users and
                        contribute to the success of the products I work on.<br><br>

                        Beyond my professional pursuits, I have a passion for cricket, both playing and watching. I also
                        enjoy exploring new places and engaging in adventure activities like paragliding, trekking, and
                        scuba diving. Crime and thriller novels captivate my interest, and I savor weekend outings and
                        parties as a way to unwind and socialize.
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
