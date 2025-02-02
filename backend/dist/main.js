"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// backend/src/main.ts
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
// Optional: Global exception filter for enhanced error handling
const http_exception_filter_1 = require("./common/filters/http-exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    // Enable global validation
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    // Optional: Use global HTTP exception filter
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    await app.listen(3000);
    console.log('Backend API is listening on http://localhost:3000');
}
bootstrap();
//# sourceMappingURL=main.js.map