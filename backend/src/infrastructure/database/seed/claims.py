import random

from sqlalchemy.orm import Session

from src.infrastructure.database.models.claims import Claim

TITLES = [
    "Не работает принтер",
    "Нет доступа к VPN",
    "Замена клавиатуры",
    "Ошибка в CRM",
    "Проблема с почтой",
    "Настройка рабочего места",
    "Сбой базы данных",
    "Обновление ПО",
    "Не работает сканер",
    "Проблема с интернетом",
]

DESCRIPTIONS = [
    "Требуется проверить оборудование.",
    "Пользователь не может выполнить вход.",
    "Возникает ошибка при работе.",
    "Необходимо заменить устройство.",
    "Проверить конфигурацию системы.",
]

STATUSES = [
    "open",
    "in_progress",
    "done",
]

PRIORITIES = [
    "low",
    "medium",
    "high",
]


def create_demo_claims(db: Session):
    if db.query(Claim).count() > 0:
        return

    claims = []

    for i in range(10):
        claims.append(
            Claim(
                title=TITLES[i],
                description=random.choice(DESCRIPTIONS),
                status=random.choice(STATUSES),
                priority=random.choice(PRIORITIES),
            )
        )

    db.add_all(claims)
    db.commit()
