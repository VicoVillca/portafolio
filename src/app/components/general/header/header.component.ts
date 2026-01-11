import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, query, transition, stagger, animate } from '@angular/animations';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { UntypedFormControl } from '@angular/forms';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations: [
        trigger("animateMenu", [
            transition(":enter", [
                query("*", [
                    style({ opacity: 0, transform: "translateY(-50%)" }),
                    stagger(50, [
                        animate("250ms cubic-bezier(0.35, 0, 0.25, 1)", style({ opacity: 1, transform: "none" }))
                    ])
                ])
            ])
        ])
    ],
    standalone: false
})
export class HeaderComponent implements OnInit {

    responsiveMenuVisible: Boolean = false;
    pageYPosition: number;
    languageFormControl: UntypedFormControl = new UntypedFormControl();
    cvName: string = "";

    constructor(
        private router: Router,
        public analyticsService: AnalyticsService,
        public languageService: LanguageService
    ) { }

    ngOnInit(): void {
        this.languageFormControl.valueChanges.subscribe(val => this.languageService.changeLanguage(val));
        this.languageFormControl.setValue(this.languageService.language);
    }

    // Método para abrir/cerrar menú
    toggleMenu() {
        this.responsiveMenuVisible = !this.responsiveMenuVisible;
        
        // Bloquear/desbloquear scroll del body
        if (this.responsiveMenuVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    // Método para cerrar menú - FIXED
    closeMenu() {
        this.responsiveMenuVisible = false;
        document.body.style.overflow = '';
        
        // Forzar actualización de la vista
        setTimeout(() => {
            // Asegurar que el scroll esté desbloqueado
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }, 100);
    }

    // Scroll a sección
    scroll(el: string) {
        if (document.getElementById(el)) {
            document.getElementById(el).scrollIntoView({ behavior: 'smooth' });
        } else {
            this.router.navigate(['/home']).then(() => {
                const element = document.getElementById(el);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
        this.responsiveMenuVisible = false;
        document.body.style.overflow = '';
    }

    downloadCV() {
        this.languageService.translateService.get("Header.cvName").subscribe(val => {
            this.cvName = val;
            let url = window.location.href;
            window.open(url + "/../assets/cv/" + this.cvName, "_blank");
        });
    }

    // Detectar scroll
    @HostListener('window:scroll', ['$event'])
    getScrollPosition(event: any) {
        this.pageYPosition = window.pageYOffset;
    }

    // Cerrar menú con ESC
    @HostListener('document:keydown.escape', ['$event'])
    handleEscape(event: KeyboardEvent) {
        if (this.responsiveMenuVisible) {
            this.closeMenu();
        }
    }

    changeLanguage(language: string) {
        this.languageFormControl.setValue(language);
    }
}