function skillsMember() {
    return {
        name: 'skillsMember',
        template: `
            <div class="skills">
                <h2>Skills</h2>
                <ul>
                    <li v-for="skill in skills">{{ skill }}</li>
                </ul>
            </div>
        `,
        data() {
            return {
                skills: ['Vue.js', 'React.js', 'Angular.js']
            };
        }
    }
}