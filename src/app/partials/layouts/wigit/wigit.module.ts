import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListWigitComponent } from "./list-wigit/list-wigit.component";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { List1Component } from "./list1/list1.component";
import { List3Component } from "./list3/list3.component";
import { WeatherReportComponent } from "./weather-report/weather-report.component";
import { PollResultComponent } from "./poll-result/poll-result.component";
import { PollComponent } from "./poll/poll.component";
import { BrowserStatsComponent } from "./browser-stats/browser-stats.component";
import { ReviewsComponent } from "./reviews/reviews.component";
import { FollowerComponent } from "./follower/follower.component";
import { FollowerProfileComponent } from "./follower-profile/follower-profile.component";
import { RecentChatsWidgitComponent } from "./recent-chats-widgit/recent-chats-widgit.component";
import { SubscribeWigitComponent } from "./subscribe-wigit/subscribe-wigit.component";
import { PersonalProfileWidgitComponent } from "./personal-profile-widgit/personal-profile-widgit.component";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { EngaugeComponent } from "./engauge/engauge.component";
import { EmailWigitComponent } from "./email-wigit/email-wigit.component";
import { DropProfileWigitComponent } from "./drop-profile-wigit/drop-profile-wigit.component";
import { ProgressBarWidgitComponent } from "./cards/progress-bar-widgit/progress-bar-widgit.component";
import { WidgitBgComponent } from "./cards/widgit-bg/widgit-bg.component";
import { SocialActionsWidgitComponent } from "./cards/social-actions-widgit/social-actions-widgit.component";
import { NewsWidgitComponent } from "./cards/news-widgit/news-widgit.component";
import { CardWidgitComponent } from "./cards/card-widgit/card-widgit.component";
import { CenterWidgitComponent } from "./cards/center-widgit/center-widgit.component";
import { ProgressCenterWidgitComponent } from "./cards/progress-center-widgit/progress-center-widgit.component";
import { DashboardTileWidgitComponent } from "./cards/dashboard-tile-widgit/dashboard-tile-widgit.component";
import { CryptoWidgitComponent } from "./cards/crypto-widgit/crypto-widgit.component";
import { WeatherWidgitComponent } from "./cards/weather-widgit/weather-widgit.component";

@NgModule({
  declarations: [
    ListWigitComponent,
    List1Component,
    List3Component,
    WeatherReportComponent,
    PollResultComponent,
    PollComponent,
    BrowserStatsComponent,
    ReviewsComponent,
    FollowerComponent,
    FollowerProfileComponent,
    SubscribeWigitComponent,
    RecentChatsWidgitComponent,
    PersonalProfileWidgitComponent,
    EngaugeComponent,
    EmailWigitComponent,
    DropProfileWigitComponent,
    ProgressBarWidgitComponent,
    WidgitBgComponent,
    SocialActionsWidgitComponent,
    NewsWidgitComponent,
    CardWidgitComponent,
    CenterWidgitComponent,
    ProgressCenterWidgitComponent,
    DashboardTileWidgitComponent,
    CryptoWidgitComponent,
    WeatherWidgitComponent,
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  exports: [
    ListWigitComponent,
    List3Component,
    List1Component,
    EngaugeComponent,
    WeatherReportComponent,
    PollResultComponent,
    PollComponent,
    BrowserStatsComponent,
    ReviewsComponent,
    FollowerComponent,
    FollowerProfileComponent,
    SubscribeWigitComponent,
    RecentChatsWidgitComponent,
    PersonalProfileWidgitComponent,
    EmailWigitComponent,
    DropProfileWigitComponent,
    ProgressBarWidgitComponent,
    SocialActionsWidgitComponent,
    WidgitBgComponent,
    NewsWidgitComponent,
    CardWidgitComponent,
    CenterWidgitComponent,
    ProgressCenterWidgitComponent,
    DashboardTileWidgitComponent,
    CryptoWidgitComponent,
    WeatherWidgitComponent,
  ],
})
export class WigitModule {}
