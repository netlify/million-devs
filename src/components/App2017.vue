<template>
  <g>
    <app-twodoto />

    <app-text x="1100" y="1100" num="6">
      <template v-slot:date>
        Mar 14, 2017
      </template>
      <template v-slot:event>
        Introduced a new design system
      </template>
      <template v-slot:event2>
        to the Netlify app
      </template>
    </app-text>

    <app-splittesting />
    <app-tree x="1550" y="1200" />
    <app-tree x="1600" y="1220" />
    <app-tree x="1500" y="1250" />

    <app-text x="1300" y="1600" num="7">
      <template v-slot:date>
        June 28, 2017
      </template>
      <template v-slot:event>
        Introduced split-branch testing
      </template>
    </app-text>

    <app-auditlogs x="700" />

    <app-text x="1020" y="1750" num="8">
      <template v-slot:date>
        June 28, 2017
      </template>
      <template v-slot:event>
        Introduced audit logs
      </template>
      <template v-slot:event2>
        for teams
      </template>
    </app-text>
  </g>
</template>

<script>
//repeated elements
import AppText from "@/components/AppText.vue"
import AppTree from "@/components/AppTree.vue"
import AppBush from "@/components/AppBush.vue"

//unique units
import AppTwodoto from "@/components/AppTwodoto.vue"
import AppSplittesting from "@/components/AppSplittesting.vue"
import AppAuditlogs from "@/components/AppAuditlogs.vue"

export default {
  components: {
    AppText,
    AppTree,
    AppBush,
    AppTwodoto: () =>
      import(/* webpackPrefetch: true */ "@/components/AppTwodoto.vue"),
    AppSplittesting: () =>
      import(/* webpackPrefetch: true */ "@/components/AppSplittesting.vue"),
    AppAuditlogs: () =>
      import(/* webpackPrefetch: true */ "@/components/AppAuditlogs.vue"),
  },
}
</script>

<style lang="scss" scoped></style>
