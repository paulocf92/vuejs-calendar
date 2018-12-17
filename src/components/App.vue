<template>
  <div>
    <div v-for="(day, id) in days" :key="id">{{ day }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      month: 2,
      year: 2018
    };
  },
  computed: {
    days() {
      // Generating days in current month
      let days = [];
      let currentDay = this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D');
      
      do {
        days.push(currentDay);
        currentDay = this.$moment(currentDay).add(1, 'days');
      } while((currentDay.month() + 1) === this.month);

      // Add previous days to start
      currentDay = this.$moment(days[0]);

      const SUNDAY = 0;
      const MONDAY = 1;

      if (currentDay.day() !== MONDAY) {
        do {
          currentDay = this.$moment(currentDay).subtract(1, 'days'); // Keep subtracting until we reach monday
          days.unshift(currentDay); // Unshift adds to the start of an array
        } while(currentDay.day() !== MONDAY);
      }

      // Add following days to end
      currentDay = this.$moment(days[days.length-1]);

      if (currentDay.day() !== SUNDAY) {
        do {
          currentDay = this.$moment(currentDay).add(1, 'days'); // Keep adding until we reach sunday
          days.push(currentDay);
        } while(currentDay.day() !== SUNDAY);
      }

      return days;
    }
  }
}
</script>
