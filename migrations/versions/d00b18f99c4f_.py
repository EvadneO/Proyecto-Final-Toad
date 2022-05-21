"""empty message

Revision ID: d00b18f99c4f
Revises: 
Create Date: 2022-05-20 20:32:49.995782

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd00b18f99c4f'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('mascota',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=120), nullable=False),
    sa.Column('edad', sa.Integer(), nullable=False),
    sa.Column('especie', sa.String(length=120), nullable=False),
    sa.Column('sexo', sa.String(length=6), nullable=False),
    sa.Column('tamaño', sa.String(length=7), nullable=False),
    sa.Column('nivel_actividad', sa.String(length=7), nullable=False),
    sa.Column('otros_cuidados', sa.String(length=200), nullable=False),
    sa.Column('url_foto', sa.String(length=200), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('nombre', sa.String(length=120), nullable=True),
    sa.Column('apellidos', sa.String(length=120), nullable=True),
    sa.Column('telefono', sa.String(length=20), nullable=True),
    sa.Column('direccion', sa.String(length=120), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('usuario__mascota',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_usuario', sa.Integer(), nullable=True),
    sa.Column('id_mascota', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['id_mascota'], ['mascota.id'], ),
    sa.ForeignKeyConstraint(['id_usuario'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('usuario__mascota')
    op.drop_table('user')
    op.drop_table('mascota')
    # ### end Alembic commands ###
