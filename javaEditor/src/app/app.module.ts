import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { ResizableModule } from 'angular-resizable-element';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';
import { QuestioExeEngineService } from './questio-exe-engine.service';
import { VideoComponent } from './video/video.component';
import { MatVideoModule } from 'mat-video';
import { EditvideoComponent } from './editvideo/editvideo.component';
import { EditaudioComponent } from './editaudio/editaudio.component';

// import { TravisCompletionProvider } from './providers/travis-completion.provider';

const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: 'assets', // configure base path for monaco editor
  defaultOptions: { scrollBeyondLastLine: false },
  onMonacoLoad: () => {
    console.log((<any>window).monaco);
    const id = 'foo.json';
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      schemas: [
        {
          uri: 'http://myserver/foo-schema.json',
          fileMatch: [id],
          schema: {
            type: 'object',
            properties: {
              p1: {
                enum: ['v1', 'v2']
              },
              p2: {
                $ref: 'http://myserver/bar-schema.json'
              }
            }
          }
        },
        {
          uri: 'http://myserver/bar-schema.json',
          fileMatch: [id],
          schema: {
            type: 'object',
            properties: {
              q1: {
                enum: ['x1', 'x2']
              }
            }
          }
        }
      ]
    });
  }
};

@NgModule({
  declarations: [AppComponent, EditComponent, VideoComponent, EditvideoComponent, EditaudioComponent],
  imports: [
    ScrollDispatchModule,
    MatGridListModule,
    BrowserModule,
    FormsModule,
    ResizableModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatNativeDateModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ScrollingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MonacoEditorModule.forRoot(monacoConfig),
    HttpClientModule,
    EmbedVideo.forRoot(),
    MatVideoModule,
  ],
  providers: [QuestioExeEngineService],
  bootstrap: [AppComponent]
})
export class AppModule {}
